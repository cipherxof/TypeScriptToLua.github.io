import * as ts from "typescript";
import * as tstl from "typescript-to-lua";

onmessage = (event: MessageEvent) => {
    const result = transpileString(event.data.tsStr);
    const errors = result.diagnostics.filter(d => d.category === ts.DiagnosticCategory.Error);
    if (errors.length == 0) {
        console.log(result);
        postMessage({ luaAST: result.transpiledFiles[0].luaAst, luaStr: result.transpiledFiles[0].lua });
    } else {
        const formatHost: ts.FormatDiagnosticsHost = {
            getCanonicalFileName: path => path,
            getCurrentDirectory: () => "",
            getNewLine: () => "\n",
        };
        postMessage({ diagnostics: ts.formatDiagnostics(errors, formatHost) });
    }
};

function transpileString(
    str: string,
    options: tstl.CompilerOptions = {
        luaLibImport: tstl.LuaLibImportKind.Inline,
        luaTarget: tstl.LuaTarget.Lua53,
    },
): tstl.TranspileResult {
    const compilerHost = {
        directoryExists: () => true,
        fileExists: (fileName: string): boolean => true,
        getCanonicalFileName: (fileName: string) => fileName,
        getCurrentDirectory: () => "",
        getDefaultLibFileName: () => "lib.es6.d.ts",
        getDirectories: () => [],
        getNewLine: () => "\n",

        getSourceFile: (filename: string, languageVersion: any) => {
            if (filename === "source.ts") {
                return ts.createSourceFile(filename, str, ts.ScriptTarget.Latest, false);
            }
            if (filename.startsWith("lib.") && filename.endsWith(".d.ts")) {
                return ts.createSourceFile(
                    filename,
                    require(`!raw-loader!typescript/lib/lib.${filename.slice(4)}`).default,
                    ts.ScriptTarget.Latest,
                    false,
                );
            }
            return undefined;
        },

        readFile: () => "",

        useCaseSensitiveFileNames: () => false,
        // Don't write output
        writeFile: (name: string, text: string, writeByteOrderMark: any) => null,
    };

    const emitHost = {
        readFile: (fileName: string) => {
            let featureName = fileName.replace("/dist/lualib/", "").replace(".lua", "");
            return require(`raw-loader!typescript-to-lua/dist/lualib/${featureName}.lua`).default;
        },
        getCurrentDirectory: () => ".",
    };
    const program = ts.createProgram(["source.ts"], options as ts.CompilerOptions, compilerHost);
    return tstl.transpile({ program, emitHost });
}

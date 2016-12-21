'use strict';

import * as vscode from 'vscode';

function registerGenerator(context: vscode.ExtensionContext, name: string, convert: (str: string) => string) {
    let disposable = vscode.commands.registerCommand(name, () => {
        let editor = vscode.window.activeTextEditor;
        if (editor) {
            let sels = editor.selections;
            if (sels.length == 1 && sels[0].isEmpty)
                sels = [new vscode.Selection(editor.document.positionAt(0), editor.document.positionAt(editor.document.getText().length))];

            editor.edit(edit => sels.forEach(v => edit.replace(v, convert(editor.document.getText(v)))));
        }
    });
    context.subscriptions.push(disposable);
}

export function activate(context: vscode.ExtensionContext) {
    registerGenerator(context, 'unicode-normalizer.unicodeNormalizeD', s => s.normalize('NFD'));
    registerGenerator(context, 'unicode-normalizer.unicodeNormalizeC', s => s.normalize('NFC'));
    registerGenerator(context, 'unicode-normalizer.unicodeNormalizeKD', s => s.normalize('NFKD'));
    registerGenerator(context, 'unicode-normalizer.unicodeNormalizeKC', s => s.normalize('NFKC'));
}

export function deactivate() {
}
# Unicode Normalizer

This is a Visual Studio Code extension, which does Unicode Normalization on selected text blocks.


![](https://raw.githubusercontent.com/espresso3389/unicode-normalizer-vscode/master/images/intro.gif)

## Features

After selecting some of texts, open Command Palette by `Ctrl-Shift-P` (Windows) or `⌘-Shift-P` and then select one of the following commands (typically just type `NFD`, `NFC`, `NFKC`, or `NFKD`):

- Unicode Normalization Form D (NFD)
- Unicode Normalization Form C (NFC)
- Unicode Normalization Form KD (NFKD)
- Unicode Normalization Form KC (NFKC)

The [Unicode Normalization](http://www.unicode.org/reports/tr15/tr15-29.html) commands depend on [_String.prototype.normalize_]((http://www.ecma-international.org/ecma-262/6.0/#sec-string.prototype.normalize)) provided on VSCode, which seems to comply with [ECMAScript 2015 (6th Edition, ECMA-262)](http://www.ecma-international.org/ecma-262/6.0/#sec-string.prototype.normalize).

## Known Issues

None.

## Release Notes

### 0.0.1

First release.


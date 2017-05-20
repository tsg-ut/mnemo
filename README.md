# MNEMO

[![Build Status][travis-image]][travis-url]
[![Coverage Status][codecov-image]][codecov-url]
[![Code Climate][codeclimate-image]][codeclimate-url]
[![Greenkeeper badge][greenkeeper-image]][greenkeeper-url]

[travis-url]: https://travis-ci.org/tsg-ut/mnemo
[travis-image]: https://travis-ci.org/tsg-ut/mnemo.svg?branch=master
[codecov-url]: https://codecov.io/gh/tsg-ut/mnemo
[codecov-image]: https://codecov.io/gh/tsg-ut/mnemo/branch/master/graph/badge.svg
[codecov-graph]: https://codecov.io/gh/tsg-ut/mnemo/branch/master/graphs/tree.svg
[codeclimate-url]: https://codeclimate.com/github/tsg-ut/mnemo
[codeclimate-image]: https://codeclimate.com/github/tsg-ut/mnemo/badges/gpa.svg
[greenkeeper-url]: https://greenkeeper.io/
[greenkeeper-image]: https://badges.greenkeeper.io/tsg-ut/mnemo.svg

[![ScreenShot](assets/screen.png)](https://mnemo.pro/)

MNEMOは、TSGが制作しているプログラミング風ゲームです。

## [最新ビルド](https://mnemo.pro/)

## カバレッジ

[![Coverage Graph][codecov-graph]][codecov-url]

## 開発に必要なもの

* Node.js v7

## 開発環境のセットアップ

```sh
git clone https://github.com/tsg-ut/mnemo.git
cd mnemo
npm install
```

APIのセットアップ・ビルド・テストは[api/README.md](api/README.md)を参照。

## ビルド

### 全部ビルド

```sh
npm run build
```

### JavaScriptだけビルド

```sh
npm run browserify
```

### HTMLだけビルド

```sh
npm run pug
```

### CSSだけビルド

```sh
npm run less
```

### 自動リビルド

```sh
npm run watch
```

## テスト

### 全部テスト

```sh
npm test
```

### ユニットテストだけ実行

```sh
npm run unit
```

### 機能テストだけ実行

```sh
npm run functional
```

### Lint

```sh
npm run lint
```

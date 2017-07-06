# MNEMO

[![Build Status][travis-image]][travis-url]
[![Coverage Status][codecov-image]][codecov-url]
[![Code Climate][codeclimate-image]][codeclimate-url]
[![Greenkeeper badge][greenkeeper-image]][greenkeeper-url]

[travis-url]: https://travis-ci.org/tsg-ut/mnemo
[travis-image]: https://travis-ci.org/tsg-ut/mnemo.svg?branch=master
[codecov-url]: https://codecov.io/gh/tsg-ut/mnemo
[codecov-image]: https://codecov.io/gh/tsg-ut/mnemo/branch/master/graph/badge.svg
[codecov-graph]: https://codecov.io/gh/tsg-ut/mnemo/branch/master/graphs/tree.svg?width=888&height=150
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

#### 本番ビルド

```sh
npm run build:production
```

### JavaScriptだけビルド

```sh
npm run js
```

### HTMLだけビルド

```sh
npm run html
```

### CSSだけビルド

```sh
npm run css
```

## 開発モード

手元にローカルサーバーを立ち上げ、変更があると自動でリビルドしブラウザを再読込してくれるモード。

```sh
npm run dev
```

### 自動リビルド

```sh
npm run watch:js
npm run watch:html
npm run watch:css
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

#### watchモード

```sh
npm run unit:karma -- --auto-watch --no-single-run
npm run unit:mocha -- --watch # なぜか動かない
```

### 機能テストだけ実行

```sh
npm run functional
```

### Lint

```sh
npm run lint
```

#### Lintエラーを自動修復

```sh
npm run lint -- --fix
```

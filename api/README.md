# MNEMO API Server

とりあえず開発環境ではSQLiteを使うようにする。

## 開発環境のセットアップ

```
cd /path/to/mnemo
npm install
npm install sequelize-cli -g
cd api
sequelize db:migrate
sequelize db:seed:all
```

## サーバー起動

```
cd /path/to/mnemo/api
node index.js
```

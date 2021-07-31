# RestAPi-learning

## dev-setup

npm init

git init

touch index.js for browser interPoint

npm install express 

npm install --save-dev nodemon  

update package.json script{ "start": "nodemon index.js"}

npm start

// setup complete

## uuid 
a module can make data has unique id 

npm install uuid

import { v4 as uuidv4 } from 'uuid'; // ES6 import syntax

## router and controller

router 是express 內建的功能 可以呼叫各種 request Method 

controller 是用來區分router中的所有函式 並輸出成模組給router呼叫 

## mock database
此專案是測試用途 使用一個物件陣列代替資料庫

## lanch project
git clone

npm install

npm start

## postman
this project use http://localhost:5000 

一開始假資料庫陣列是空

Method get(): http://localhost:5000/user --- 得到全部使用者資料

Method get(): http://localhost:5000/user/id --- 依照id得到特定使用者資料

Method post(): http://localhost:5000/user --- 建立使用者資料

Method delete(): http://localhost:5000/user/id --- 依照id刪除特定使用者資料

Method patch(): http://localhost:5000/user/id --- 依照id更新特定使用者資料

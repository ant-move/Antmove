#!/bin/bash
cd packages/@antmove

cd utils && npm link && cd ..
cd wx-amap-plugin && npm link && cd ..
cd wx-alipay-plugin && npm link 
npm link @antmove/utils @antmove/wx-amap && cd ..


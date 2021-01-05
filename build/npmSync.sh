#!/bin/bash

packages=(
    "@amove/wx-utils"
    "@amove/wx"
    "@amove/wx-tt"
    "@amove/wx-alipay"
    "@antmove/utils"
    "@antmove/wx-alipay-plugin"
    "@antmove/wx-wx-plugin"
    "@antmove/wx-tt-plugin"
    "@antmove/wx-qq-plugin"
    "@antmove/wx-quickapp-plugin"
    "@antmove/template-plugin"
    "@antmove/wx-baidu-plugin"
    "@antmove/wx-amap-plugin"
    "@antmove/alipay-wx-plugin"
    "@antmove/alipay-baidu-plugin"
    "@antmove/alipay-polyfill-plugin"
    "@antmove/core"
    "antmove"
)

echo "同步完成"

for package in ${packages[@]}
do
    echo "sync $package start"
    cnpm sync $pacakge
    tnpm sync $package
    echo "sync $package success"
done

echo "同步完成"

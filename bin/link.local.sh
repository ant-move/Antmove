#!/bin/bash

npm_module_prefix=packages/@antmove

link_npm_module=(
    $npm_module_prefix/utils
    $npm_module_prefix/alipay-baidu-plugin
    $npm_module_prefix/alipay-wx-plugin
    $npm_module_prefix/wx-alipay-plugin
    $npm_module_prefix/wx-wx-plugin
    $npm_module_prefix/wx-amap-plugin
)

for module in ${link_npm_module[@]}
do
    echo "Ready to link ${module}"

    cd $module 1>/dev/null
    tnpm link 1>/dev/null 2>/dev/null
    cd - 1>/dev/null

    echo "Link ${module} done"
done

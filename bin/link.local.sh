#!/bin/bash

npm_module_prefix=packages/@antmove

link_npm_module=(
    $npm_module_prefix/utils
    $npm_module_prefix/alipay-baidu-plugin
    $npm_module_prefix/alipay-wx-plugin
    $npm_module_prefix/wx-wx-plugin
    $npm_module_prefix/wx-amap-plugin
    $npm_module_prefix/wx-alipay-plugin
)

index=0
for module in ${link_npm_module[@]}
do
    echo "Ready to link ${module}"
    let index+=1

    cd $module 1>/dev/null 2>/dev/null

    if [ $index -gt 1 ];
    then
        rm -rf node_moduels/@antmove 1>/dev/null 2>/dev/null
        npm link @antmove/utils 1>/dev/null 2>/dev/null
    fi

    if [ $index -eq 6 ];
    then
        npm link @antmove/wx-amap 1>/dev/null 2>/dev/null
    fi

    npm link 1>/dev/null 2>/dev/null

    cd - 1>/dev/null 2>/dev/null

    echo "Link ${module} done"
done

rm -rf node_moduels/@antmove 1>/dev/null 2>/dev/null
npm link @antmove/utils @antmove/wx-alipay @antmove/alipay-wx @antmove/alipay-baidu 1>/dev/null 2>/dev/null
npm link 1>/dev/null 2>/dev/null

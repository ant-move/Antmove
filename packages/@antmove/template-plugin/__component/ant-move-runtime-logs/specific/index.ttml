<view class="sp bg">
  <view class="sp-mid bg">
    <view class="sp-input">
      <view class="sp-input-img" onTap="find">
        <image mode="scaleToFill" src="../image/fangdajing.png"/>
      </view>   
      <input placeholder="输入筛选关键字" class="sp-input-style" onInput="bindKeyInput"  confirm-type="search" onConfirm = "find"
        onFocus="menuHide" controlled="true" value= "{{inputValue}}"/>
      <view class="sp-input-img " >
        <image mode="scaleToFill" src="../image/delete3.png" a:if="{{deletShow}}" onTap="delet"/>
      </view>
    </view>
    <view class="inp-swich bg" onTap="menuShow">
      <image mode="scaleToFill" src="../image/menu3x.png" class="sp-menu"/>
    </view>
  </view>

  <scroll-view scroll-y="true" enable-back-to-top="true" trap-scroll="true" class = "kind-scroll">
    <view class="kind-list">
      <block a:for="{{_logs?_logs:logs}}" a:key="{{item.name}}">
        <view class="kind-list-item">
          <view id="{{item.name}}" class="sp-msg kind-list-item-hd " onTap="kindToggle">
            <view class="kind-list-text">
              <text class="sp-name">
                {{item.name}}
              </text>         
            </view>
            <view class="wg">
              <image mode="scaleToFill" src="../image/shouqi.png" class="sp-msg-img" a:if="{{item.open}}"/>
              <image mode="scaleToFill" src="../image/zhankai.png" class="sp-msg-img" a:if="{{!item.open}}"/>
            </view>
          </view >
          <view class="kind-list-item-bd {{item.open ? 'kind-list-item-bd-show' : ''}}">
            <view class="navigator-box {{item.open ? 'navigator-box-show' : ''}}">
              <view class="navigator-text log-show-warn">
                <view class="log-show-log-p"><text class="log-show-log-p-cir" space="emsp" decode="true">●&nbsp;&nbsp;</text> 名称 :
                  <text space="emsp" decode="true">&nbsp;{{item.name?item.name:''}}</text></view>
                <view class="log-show-log-p"><text class="log-show-log-p-cir" space="emsp" decode="true">●&nbsp;&nbsp;</text> 类型 :
                  <text space="emsp" decode="true">&nbsp;{{item.type?item.type:''}}</text></view>
                <view class="log-show-log-p"><text class="log-show-log-p-cir" space="emsp" decode="true">●&nbsp;&nbsp;</text> 警告等级 :
                  <text space="emsp" decode="true">&nbsp;{{item.errorType||item.errorType===0?item.errorType:''}}
                  </text>
                </view> 
                <view class="log-show-log-p"><text class="log-show-log-p-cir" space="emsp" decode="true">●&nbsp;&nbsp;</text> 等级描述 :
                  <text space="emsp" decode="true">&nbsp;{{item.custom?item.custom:''}}</text>
                </view>
                <view><text class="log-show-log-p-cir" space="emsp" decode="true">●&nbsp;&nbsp;</text> 警告描述 :
                  <text class="log-show-log " space="emsp" decode="true">&nbsp;{{item.message?item.message:''}}
                  </text>
                </view>
              </view>
            </view>
          </view>
        </view>
      </block>
      <view class="footer">
        <view>
        </view>
        <view class="footer-num">
          共{{logNum}}条日志
        </view>
      </view>
      <view class="box" ></view>
    </view>
  </scroll-view>


  <view class="menu" a:if="{{menuShow}}">
    <view class="menu-top" onTap="allShow"> 
      <view a:if="{{allShow}}" onTap="open">全部展开</view>
      <view a:if="{{!allShow}}" onTap= "recover">全部收起</view>
    </view>
    <view>
      <block>

      </block>
    </view>
    <view></view>
  </view>

  <view a:if="{{notMatch}}" class="notMatch">
    <view class="bg">
      <image mode="scaleToFill" src="../image/blank3x.png" class="notMatch-img"/>
    </view>     
     <view class="notMatch-text">没有匹配的日志信息</view>    
  </view>

  <view class = "antmove_logo">
    <view class = "antmove_logo_box"> 
        <view class = "antmove_logo_wrap">
            <image class="antmove_logo_img" mode="scaleToFill" src="../image/antmove_logo.png"/>
        </view>   
        <view>
           <text class="antmove_text"> Antmove</text>
        </view>       
    </view>
  </view>
</view>

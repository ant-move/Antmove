Component({

    data: {
        mapShow: false,
        scale: 17,
        mapId: "",
        latitude: '40.048828',
        longitude: '116.280412',
        polyline: [],
        circles: [],
        enable3d: false,
        showCompass: false,
        showLocation: true,
        enableOverlooking: false,
        enableZoom: true,
        enableScroll: true,
        enableRotate: false,
        drawPolygon: false,
        enableSatellite: false,
        enableTraffic: false,
        markers: [],
        controls: []
    }, // 私有数据，可用于模版渲染

    created: function () {
        const initData = {
            mapShow: true,
            scale: this.properties.scale+1
        }
        if (this.properties.latitude||this.properties.longitude) {
            let {longitude, latitude} = this.bdEncrypt( this.properties.longitude, this.properties.latitude);
            initData.longitude = longitude;
            initData.latitude = latitude;
        }
        this.dataInit(this.properties, initData);
        this.setData(initData);
    },
    methods: {
        bdEncrypt (gg_lon, gg_lat) {  
            let X_PI = Math.PI * 3000.0 / 180.0;  
            let x = gg_lon, y = gg_lat;  
            let z = Math.sqrt(x * x + y * y) + 0.00002 * Math.sin(y * X_PI);  
            let theta = Math.atan2(y, x) + 0.000003 * Math.cos(x * X_PI);  
            let longitude = z * Math.cos(theta) + 0.0065;  
            let latitude = z * Math.sin(theta) + 0.006;  
            return {  
                latitude,  
                longitude 
            };  
        },
        dataInit (properties, data) {
            const keyArr = ['markers', 'includePoints', 'circles'];
            keyArr.map(key => {
                if (properties[key] && properties[key] instanceof (Array)) {
                    properties[key].map( item => {
                        let { longitude, latitude } = this.bdEncrypt(item.longitude, item.latitude);
                        item.longitude = longitude;
                        item.latitude = latitude;
                    });
                }
                data[key] = properties[key];
            });
            
            
        },
        onTap (e) {
            this.triggerEvent('tap', e.detail);
        },
        onMarkertap (e) {
            this.triggerEvent('markertap', e.detail);
        },
        onCallouttap (e) {
            this.triggerEvent('callouttap', e.detail);
        },
        onControltap (e) {
            this.triggerEvent('controltap', e.detail);
        },
        onRegionchange (e) {
            this.triggerEvent('regionchange', e.detail);
        },
        onUpdated (e) {
            this.triggerEvent('updated', e.detail);
        }
    }
});
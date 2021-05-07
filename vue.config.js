module.exports = {
    devServer: {
        proxy: {
            "/api": {
                target: 'http://210.241.98.236:8080/DTS/caselist/html', //介面域名
                ws: true,
                changeOrigin: true,
                pathRewrite: {
                    '^/api': '' //萬用字元
                }
            }
        }

    }
}

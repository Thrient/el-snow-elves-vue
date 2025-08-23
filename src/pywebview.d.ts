declare global {
    interface Window {
        pywebview: {
            api: {
                // 使用函数重载定义多个调用签名
                emit(name: string);
                emit(name: string, args: any);

                // 实现签名（实际的函数实现）
                emit(name: string, args?: any);
            }
        }
    }
}

export {}
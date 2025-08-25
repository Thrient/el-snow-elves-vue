declare global {
    interface Window {
        pywebview: {
            api: {
                emit(name: string);
                emit(name: string, arg1: any);
                emit(name: string, arg1: any, arg2: any);
                emit(name: string, ...args: any[]);


            }
        }
    }
}

export {}
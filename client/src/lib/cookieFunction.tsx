
export function setCookie(name: string, value: string, days: number) {
    if (process.browser) {
        let expires = "";
        if (days) {
            const date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            expires = "; expires=" + date.toUTCString();
        }
        document.cookie = name + "=" + (value || "") + expires + "; path=/";
    } else {
        // Server-side
        console.log("Cannot set cookie on server side in Next.js");
    }
}

export function getCookie(name: string, context?: any) {
    if (typeof window !== 'undefined') {
        const nameEQ = name + "=";
        const ca = document.cookie.split(';');
        for (let i = 0; i < ca.length; i++) {
            let cookie = ca[i].trim();
            if (cookie.indexOf(nameEQ) === 0)
                return cookie.substring(nameEQ.length, cookie.length);
        }
        return null;
    } else {
        // Server-side
        if (context && context.req && context.req.headers.cookie) {
            let cookies = context.headers.cookie.split(';');
            for (let i = 0; i < cookies.length; i++) {
                let cookie = cookies[i].trim();
                if (cookie.indexOf(name) === 0) return cookie.substring(name.length + 1);
            }
        }
        return null;
    }
}

export function eraseCookie(name: string) {
    if (typeof window !== 'undefined') {
        document.cookie = name + "=; path=/ expires=Thu, 01 Jan 1970 00:00:00 GMT;";
    } else {
        console.log(`Can't erase cookie on server side in Next.js`);
    }
}
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function middleware(request: NextRequest) {
    const cookie = cookies().get('Authorization')

    if (!cookie)
        return NextResponse.redirect(new URL("/signin", request.url))

    try {
        const res = await fetch ('https://accountprovider---silicon.azurewebsites.net/api/verifytoken?code=doP25-VkRrNCzxkVuO9ulYo-E_41VZung4Eoe3rpiMG_AzFuzyOKJg==', {
            method: 'post',
            headers: {
                "Authorization": `bearer ${cookie.value}`
            }
        })

        if (res.status === 200)
            NextResponse.redirect(request.url)
        else 
        return NextResponse.redirect(new URL("/signin", request.url))
    
    }
    catch(error) {
        return NextResponse.redirect(new URL("/signin", request.url))
    }
}

export const config = {
    matcher: "/account/:path*"
}
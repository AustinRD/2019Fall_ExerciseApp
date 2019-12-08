const api_root = "http://localhost:3000/profile/";

export async function api(url, data)
{
    let response;
    const headers = { authorization: "bearer " + User.id };

    if(data)
    {
        response = await fetch(api_root + url, {
            method: 'POST',
            cache: 'no-cache',
            headers: {
                ...headers,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
    }
    else
    {
        response = await fetch(api_root + url, { headers });
    }
    if(response.ok)
    {
        return await response.json();
    }
    else
    {
        throw await response.json();
    }
}

export const User = {
    id: 0
}
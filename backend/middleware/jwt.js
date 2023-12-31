export const verifyToken=(req,res)=>{
    const token = req.cookies.accessToken;
    if(!token) return req.status(401).send("you are not authenticated");

    jwt.verify(token,process.env.JWT_KEY,async(err,payload)=>{
        if(err) return req.status(403).send("Token is not valid");
        req.userId = payload.id;
        req.isSeller = payload.isSeller;
    })

}
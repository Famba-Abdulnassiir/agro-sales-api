async function getUsers(req, res){
    const users = await prisma.user.findMany()
    res.send(users)
}

module.exports = getUsers
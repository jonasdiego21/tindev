module.exports = {
    async store(request, response) {
        console.log(request.body);
        console.log(request.file);
        return response.json({ ok: true });
    }
}
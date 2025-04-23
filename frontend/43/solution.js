function findBrokenFiles(folder, result) {
    folder.size((size) => {
        Array
            .from({ length: size })
            .forEach((_, i) => {
                folder.read(i, (file) => {
                    if (file === null) {
                        return
                    }

                    if (typeof file === 'string' && file !== 'file') {
                        result.push(file)
                    }

                    if (typeof file === 'object' && 'read' in file && 'size' in file) {
                        findBrokenFiles(file, result)
                    }
                })
            })
    })
}

async function solution(input) {
    const result = []

    findBrokenFiles(input, result)

    await new Promise((res, rej) => setTimeout(() => res(), 1000))

    return result.sort()
}

module.exports = solution

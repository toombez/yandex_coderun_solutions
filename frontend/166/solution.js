const MAX_GRADE = 25

/**
* @param {number} N - целое число, количество сотрудников готовых к объединению
* @param {number[]} staff - массив длины N с грейдами доступных сотрудников
* @param {number} K - целое число, количество доступных клавиатур
* @returns {number}
*/
function solution(N, staff, K) {
    const staffGradesCount = new Map(Array
        .from({ length: MAX_GRADE })
        .map((_, grade) => [grade, 0])
    )

    for (let i = 0; i < N; i++) {
        const grade = staff[i]

        staffGradesCount.set(grade, staffGradesCount.get(grade) + 1)
    }

    const sortedGrades = Array
        .from(staffGradesCount.entries())
        .filter(([_, count]) => count !== 0)
        .reverse()

    let gradesSum = 0
    let countToAdd = K

    for (const [grade, count] of sortedGrades) {
        const toAddCount = Math.min(countToAdd, count)

        gradesSum += grade * toAddCount
        countToAdd -= toAddCount

        if (countToAdd === 0) {
            break
        }
    }

    return gradesSum
}

module.exports = solution

console.log(1, solution(8, [5, 13, 8, 4, 4, 15, 1, 9], 8))
console.log(2, solution(11, [14, 8, 15, 19, 2, 21, 13, 21, 12, 10, 8], 5))
console.log(3, solution(15, [19, 20, 5, 10, 2, 20, 7, 9, 1, 3, 13, 14, 3, 3, 4], 1))
console.log(4, solution(12, [22, 7, 24, 24, 11, 22, 24, 3, 9, 16, 2, 19], 7))
console.log(5, solution(7, [10, 3, 21, 23, 6, 3, 8], 4))


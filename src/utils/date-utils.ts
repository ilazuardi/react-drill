export function newestRange(date?: Date | string) {

    const parsedDate = new Date(date || "")
    const todayDate = Date.now()
    const backFiveDayDate = todayDate - (5 * 24 * 60 * 60 * 1000)

    return parsedDate.getTime() > backFiveDayDate && parsedDate.getTime() <= todayDate

}
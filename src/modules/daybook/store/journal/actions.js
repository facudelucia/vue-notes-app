import journalApi from "@/api/journalApi"

/* export const myAction = async ({commit}) => {

} */

export const loadEntries = async ({ commit }) => {
    const { data } = await journalApi.get('/entries.json')
    console.log('holaaaa')
    if (!data) {
        commit('setEntries', [])
        return
    }
    const entries = []

    for (let id of Object.keys(data)) {
        entries.push({
            id,
            ...data[id]
        })

    }
    commit('setEntries', entries)
}

export const updateEntry = async ({ commit }, entry) => {
    const { id, date, picture, text } = entry
    const dataToSave = { date, picture, text }
    await journalApi.put(`/entries/${id}.json`, dataToSave)
    commit('updateEntry', { ...entry })
}

export const createNewEntry = async ({ commit }, entry) => {
    const { date, picture, text } = entry
    const dataToSave = { date, text, picture }
    const resp = await journalApi.post(`/entries.json`, dataToSave)
    const newEntry = {
        date,
        text,
        picture,
        id: resp.data.name
    }
    commit('createNewEntry', newEntry)
    return resp.data.name
}

export const deleteEntry = async ({ commit }, id) => {
    await journalApi.delete(`/entries/${id}.json`)
    commit('deleteEntry', id)
}
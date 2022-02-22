import * as types from "../actionTypes/quest"

export const initQuestLoading = () => ({
    type: types.INIT_QUEST_LOADING,
});
export const initQuestSuccess = (payload) => ({
    type: types.INIT_QUEST_SUCCESS,
    payload,
});
export const initQuestError = (payload) => ({
    type: types.INIT_QUEST_ERROR,
    payload,
    error: true,
});

export const deleteQuestLoading = () => ({
    type: types.DELETE_QUEST_LOADING,
});
export const deleteQuestSuccess = (payload) => ({
    type: types.DELETE_QUEST_SUCCESS,
    payload,
});
export const deleteQuestError = (payload) => ({
    type: types.DELETE_QUEST_ERROR,
    payload,
    error: true,
});
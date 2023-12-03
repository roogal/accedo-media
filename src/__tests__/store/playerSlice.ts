import reducer from '../../store/playerSlice'

describe('Store - playerSlice', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, { type: undefined })).toEqual(
      {
        playlist: [],
        current: undefined,
        error: undefined,
        pending: undefined
      })
  })
})
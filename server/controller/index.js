// const { agoraStatesDiscussions } = require("../repository/discussions");
const { agoraStatesDiscussions } = require("../repository/discussions")
const discussionsData = agoraStatesDiscussions;

const discussionsController = {
  findAll: (req, res) => {
    // TODO: 모든 discussions 목록을 응답합니다.
    res.status(200).json(discussionsData)
  },

  addDiscussion: (req, res) => {
    // 받은 서버 데이터를 업데이트한다.
    console.log('this is request:', req.body)
    discussionsData.unshift(req.body)
    // 업데이트 된 데이터를 보내준다. 
    res.status(200).json(discussionsData)
  },

  findById: (req, res) => {
    // TODO: 요청으로 들어온 id와 일치하는 discussion을 응답합니다.
    let { id } = req.params
    let numberId = Number(id)

      const matchedDiscussion = discussionsData.filter(discussion => discussion.id === numberId)

      if (!matchedDiscussion.length) {
        res.status(404).json( {message: "Data not found!"})
      }
      
      res.json(matchedDiscussion[0])
  }
};

module.exports = {
  discussionsController,
};

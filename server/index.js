const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const PORT = 3000;

// 允许跨域请求
app.use(cors());
// 解析JSON请求体
app.use(express.json());

// 处理前端请求的路由
app.post('/api/fetch-external', async (req, res) => {
  try {
    const { userInput } = req.body;
    
    // 这里使用JSONPlaceholder作为示例API，实际替换为你的目标API
    const apiUrl = `https://api.yyy001.com/api/yiyan?code=json?charset=${userInput}`;
    
    // 请求外部API
    const response = await axios.get(apiUrl);
    
    // 返回API数据给前端
    res.json(response.data);
    console.log(response.data)
  } catch (error) {
    console.error('API请求失败:', error);
    res.status(500).json({ error: '获取外部数据失败' });
  }
});

app.listen(PORT, () => {
  console.log(`后端服务运行在 http://localhost:${PORT}`);
});
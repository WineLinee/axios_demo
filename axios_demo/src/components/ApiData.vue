<template>
  <div class="app">
    <h1>API数据查询工具</h1>
    
    <div class="input-section">
      <input 
        type="text" 
        v-model="userInput"
        placeholder="输入编码格式"
        @keyup.enter="fetchData"
      />
      <button @click="fetchData">获取数据</button>
    </div>
    
    <div v-if="loading" class="loading">加载中...</div>
    
    <div v-if="error" class="error">
      {{ error }}
    </div>
    
    <div v-if="apiData.length > 0">
      <!-- <h2>查询结果 ({{ apiData.length }}条)</h2> -->
      <div class="results">
        <!-- <div v-for="(item, index) in apiData" :key="index" class="card">
          <h3>{{ item.title }}</h3>
          <p>{{ item.body }}</p>
        </div> -->
        <h3>{{ apiData }}</h3>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      userInput: '',
      apiData: [],
      loading: false,
      error: null
    };
  },
  methods: {
    async fetchData() {
      if (!this.userInput.trim()) {
        this.error = '请输入有效内容';
        return;
      }
      
      this.loading = true;
      this.error = null;
      
      try {
        const response = await axios.post('http://localhost:3000/api/fetch-external', {
          userInput: this.userInput
        });
        
        this.apiData = response.data;
        
        if (this.apiData.length === 0) {
          this.error = '未找到相关数据';
        }
      } catch (err) {
        console.error('请求失败:', err);
        this.error = '获取数据失败，请重试';
        this.apiData = [];
      } finally {
        this.loading = false;
      }
    }
  }
};
</script>

<style>
.app {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  font-family: Arial, sans-serif;
}

.input-section {
  display: flex;
  margin-bottom: 20px;
}

input {
  flex: 1;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px 0 0 4px;
}

button {
  padding: 10px 20px;
  background: #42b983;
  color: white;
  border: none;
  border-radius: 0 4px 4px 0;
  cursor: pointer;
  font-size: 16px;
}

button:hover {
  background: #35a06e;
}

.loading, .error {
  padding: 15px;
  margin: 15px 0;
  border-radius: 4px;
  text-align: center;
}

.loading {
  background: #f8f8f8;
  color: #666;
}

.error {
  background: #ffebee;
  color: #f44336;
}

.results {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  margin-top: 20px;
}

.card {
  padding: 15px;
  border: 1px solid #eee;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  transition: transform 0.2s;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 8px rgba(0,0,0,0.15);
}

.card h3 {
  margin-top: 0;
  color: #2c3e50;
}

.card p {
  color: #666;
  line-height: 1.5;
}
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.header {
  text-align: center;
  margin-bottom: 40px;
  padding: 20px;
  background: rgba(255, 255, 255, 0.85);
  border-radius: 15px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.2);
}

h1 {
  color: #2c3e50;
  font-size: 2.8rem;
  margin-bottom: 10px;
}

.subtitle {
  color: #7f8c8d;
  font-size: 1.2rem;
  margin-bottom: 20px;
}

.architecture {
  display: flex;
  justify-content: center;
  margin: 30px 0;
  padding: 20px;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 12px;
  font-weight: bold;
}

.step {
  display: flex;
  align-items: center;
  margin: 0 15px;
  color: #2c3e50;
}

.controls {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 30px;
}

.btn {
  padding: 14px 28px;
  border: none;
  border-radius: 50px;
  background: #3498db;
  color: white;
  font-size: 1.1rem;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
}

.btn:hover {
  background: #2980b9;
  transform: translateY(-3px);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.25);
}

.btn:active {
  transform: translateY(1px);
}

.btn.secondary {
  background: #2ecc71;
}

.btn.secondary:hover {
  background: #27ae60;
}

.btn.warning {
  background: #e74c3c;
}

.btn.warning:hover {
  background: #c0392b;
}

.status-container {
  display: flex;
  justify-content: center;
  margin: 20px 0;
  min-height: 50px;
}

.status {
  padding: 15px 30px;
  border-radius: 50px;
  font-weight: bold;
  text-align: center;
  max-width: 80%;
}

.loading {
  background: rgba(255, 255, 255, 0.9);
  color: #2c3e50;
}

.error {
  background: rgba(231, 76, 60, 0.9);
  color: white;
}

.success {
  background: rgba(46, 204, 113, 0.9);
  color: white;
}

.data-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 25px;
  margin-top: 20px;
}

.card {
  background: white;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.25);
}

.card-header {
  background: #3498db;
  color: white;
  padding: 18px;
  font-weight: bold;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.card-id {
  background: rgba(0, 0, 0, 0.2);
  padding: 5px 12px;
  border-radius: 20px;
  font-size: 0.9rem;
}

.card-body {
  padding: 20px;
}

.card-title {
  font-size: 1.4rem;
  margin-bottom: 15px;
  color: #2c3e50;
  min-height: 70px;
}

.card-text {
  color: #7f8c8d;
  line-height: 1.6;
}

.card-footer {
  padding: 15px 20px;
  background: #f8f9fa;
  display: flex;
  justify-content: space-between;
  color: #7f8c8d;
  font-size: 0.9rem;
}

.empty-state {
  text-align: center;
  padding: 50px;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 15px;
  grid-column: 1 / -1;
}

.empty-state i {
  font-size: 4rem;
  color: #bdc3c7;
  margin-bottom: 20px;
}

.empty-state h3 {
  color: #7f8c8d;
  margin-bottom: 15px;
}

@media (max-width: 768px) {
  .architecture {
    flex-direction: column;
    align-items: center;
    gap: 15px;
  }
  
  .controls {
    flex-direction: column;
    align-items: center;
  }
  
  .btn {
    width: 100%;
    max-width: 300px;
  }
}
</style>
<template>
  <div class="dashboard">
    <Header />
    <div class="dashboard-main">
      <Sidebar />
      <div class="dashboard-content">
        <h2>Home</h2>
        <el-row :gutter="20" v-for="row in 2" :key="row" style="margin-bottom: 20px;">
          <el-col :span="8" v-for="col in 3" :key="col">
            <el-card>
              <v-chart :option="chartOptions[(row - 1) * 3 + (col - 1)]" autoresize style="height: 260px;" />
            </el-card>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script setup>
import Sidebar from '../components/Sidebar.vue'
import Header from '../components/Header.vue'
import { ref } from 'vue'
import { use } from 'echarts/core'
import VChart from 'vue-echarts'
import { CanvasRenderer } from 'echarts/renderers'
import { BarChart, LineChart, PieChart } from 'echarts/charts'
import { GridComponent, TooltipComponent, LegendComponent, TitleComponent } from 'echarts/components'

use([
  CanvasRenderer,
  BarChart,
  LineChart,
  PieChart,
  GridComponent,
  TooltipComponent,
  LegendComponent,
  TitleComponent
])

const chartTypes = ['bar', 'line', 'pie']

function randomDataArray(len = 7) {
  return Array.from({ length: len }, () => Math.round(Math.random() * 100))
}

function randomChartOption(type) {
  if (type === 'bar') {
    return {
      title: { text: '隨機柱狀圖', left: 'center', top: 10, textStyle: { fontSize: 14 } },
      tooltip: {},
      xAxis: { data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] },
      yAxis: {},
      series: [{ type: 'bar', data: randomDataArray() }]
    }
  } else if (type === 'line') {
    return {
      title: { text: '隨機折線圖', left: 'center', top: 10, textStyle: { fontSize: 14 } },
      tooltip: {},
      xAxis: { data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] },
      yAxis: {},
      series: [{ type: 'line', data: randomDataArray() }]
    }
  } else {
    // pie
    return {
      title: { text: '隨機圓餅圖', left: 'center', top: 10, textStyle: { fontSize: 14 } },
      tooltip: {},
      legend: { bottom: 0 },
      series: [{
        type: 'pie',
        radius: '60%',
        data: [
          { value: Math.round(Math.random() * 100), name: 'A' },
          { value: Math.round(Math.random() * 100), name: 'B' },
          { value: Math.round(Math.random() * 100), name: 'C' },
          { value: Math.round(Math.random() * 100), name: 'D' }
        ]
      }]
    }
  }
}

const chartOptions = ref(
  Array.from({ length: 6 }, () => randomChartOption(chartTypes[Math.floor(Math.random() * 3)]))
)
</script>

<style scoped>
.dashboard {
  height: 100vh;
  display: flex;
  flex-direction: column;
}

.dashboard-main {
  flex: 1;
  display: flex;
}

.dashboard-content {
  flex: 1;
  padding: 30px;
}
</style> 
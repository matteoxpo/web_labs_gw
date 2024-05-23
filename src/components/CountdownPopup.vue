<template>
    <div>
      <div v-if="showPopup" class="popup">
        <div class="popup-content">
          <h2>Акция!</h2>
          <p>Оставьте заявку сейчас и получите помощь в поиске работы по скидке 99%!</p>
          <p>До конца акции осталось:</p>
          <div class="timer">{{ formattedTime }}</div>
          <form @submit.prevent="handleSubmit">
            <div class="form-group">
              <label for="name">Имя:</label>
              <input type="text" id="name" v-model="name" required />
            </div>
            <div class="form-group">
              <label for="phone">Номер телефона:</label>
              <input type="tel" id="phone" v-model="phone" required />
            </div>
            <button type="submit">Отправить</button>
          </form>
          <button @click="closePopup" class="close-button">Закрыть</button>
        </div>
      </div>
      <button v-if="!showPopup" @click="openPopup" class="open-button">Открыть акцию</button>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted, onBeforeUnmount, computed } from 'vue';
  
  const showPopup = ref(true);
  const remainingTime = ref(60000); // Начальное время в миллисекундах (например, 1 минута)
  let intervalId = null;
  
  const name = ref('');
  const phone = ref('');
  
  const startTimer = () => {
    intervalId = setInterval(() => {
      if (remainingTime.value > 0) {
        remainingTime.value -= 10; // Уменьшаем время на 10 миллисекунд
      } else {
        clearInterval(intervalId);
      }
    }, 10);
  };
  
  const closePopup = () => {
    showPopup.value = false;
    clearInterval(intervalId);
  };
  
  const openPopup = () => {
    showPopup.value = true;
    remainingTime.value = 60000; // Перезапуск таймера
    startTimer();
  };
  
  const handleSubmit = () => {
    alert(`Заявка отправлена! Имя: ${name.value}, Номер телефона: ${phone.value}`);
    closePopup();
  };
  
  const formattedTime = computed(() => {
    const minutes = String(Math.floor(remainingTime.value / 60000)).padStart(2, '0');
    const seconds = String(Math.floor((remainingTime.value % 60000) / 1000)).padStart(2, '0');
    const milliseconds = String(remainingTime.value % 1000).padStart(3, '0');
    return `${minutes}:${seconds}:${milliseconds}`;
  });
  
  onMounted(() => {
    startTimer();
  });
  
  onBeforeUnmount(() => {
    clearInterval(intervalId);
  });
  </script>
  
  <style scoped>
  .popup {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .popup-content {
    background: white;
    padding: 20px;
    border-radius: 10px;
    text-align: center;
  }
  
  .timer {
    font-size: 24px;
    margin: 10px 0;
  }
  
  .form-group {
    margin: 10px 0;
  }
  
  .close-button {
    margin-top: 10px;
  }
  
  .open-button {
    position: fixed;
    bottom: 20px;
    right: 20px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 50%;
    width: 10%;
    height: 5%;
    font-size: 18px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .open-button:hover {
    background-color: #0056b3;
  }
  </style>
  
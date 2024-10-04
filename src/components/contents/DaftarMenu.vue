<template>
    <div id="title" class="bg-[#f5f3ec] flex justify-between gap-[20px] p-[10px] mb-[20px]">
        <p class="">Daftar Menu</p>
        <div class="flex gap-[10px]">
            <p>Cari Menu: </p>
            <input class="text-[#b89d4c] font-semibold text-[17px] rounded-[5px] focus:outline-[#b89d4c] px-[5px]" />
        </div>
    </div>
    <div id="font" class="grid grid-cols-2 overflow-auto max-h-[40%]">
        <button v-for="n in jumlah" :key="index"
            class="bg-[#f5f3ec] flex justify-between my-[5px] p-[5px] mx-auto rounded-[5px] w-[5cm] max-h-[35px]">
            <p>Bakmi Jawa</p>
            <p>@25.000</p>
        </button>
    </div>
</template>
<script>
export default {
    name: 'menu',
    data() {
        return {
            jumlah: 10
        }
    }
}
</script>
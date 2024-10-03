<template>
    <div id="title" class="bg-[#f5f3ec] flex justify-between gap-[20px] p-[10px] mb-[20px]">
        <p class="">Nota</p>
        <p>Id Transaksi: 02-10-2024</p>
    </div>
    <div id="font" class="h-[30%] overflow-auto border-b-2">
        <div class="bg-[#e7e1cc] flex justify-between my-[5px] mx-[20px] p-[5px] rounded-[5px]">
            <div class="flex justify-between w-[70%]">
                <p>Nama</p>
                <p>Jumlah</p>
            </div>
            <p>Harga</p>
        </div>
        <div class="bg-[#f5f3ec] flex justify-between my-[5px] mx-[20px] p-[5px] rounded-[5px]">
            <div class="flex justify-between w-[70%]">
                <p>Bakmi Jawa</p>
                <input v-model="jumlah" class="w-[30px] outline-[#b89d4c] border border-[#b89d4c] text-center" />
            </div>
            <p>Rp 48.000</p>
        </div>
    </div>
    <div id="font" class="bg-[#e7e1cc] flex justify-between my-[5px] mx-[20px] p-[5px] rounded-[5px]">
        <div class="flex justify-between w-[70%]">
            <p></p>
            <p>Total</p>
        </div>
        <p>Rp 48.000</p>
    </div>
</template>
<script>
export default {
    name: 'nota',
    data() {
        return {
            jumlah: 2
        }
    }
}
</script>
<template>
  <div class="form">
    <form>
      <center>
        <br />
        <h5>Subscribe to get more out of Disney+Hotstar</h5>
        <b-table
          :fields="fields"
          :items="items"
          class="text-white  border-1  mt-5 w-75"
        >
          <!-- A custom formatted data column cell -->
          <template #cell(name)="data">
            {{ data.value.first }}
          </template>
        </b-table>
        <button type="button" class="btn btn-primary btn-lg p-2 ms-3">
          <button class="btn btn-warning mr-5 p-1">
            <span class="but">VIP</span></button
          ><br /><span> 399/year</span>
        </button>
        <button type="button" class="btn btn-primary btn-lg p-2  ms-3">
          <button class="btn btn-info mr-5 p-1">
            <span class="but">PREMIUM</span></button
          ><br /><span>1499/year</span>
        </button>
        <button type="button" class="btn btn-primary btn-lg p-2  ms-3">
          <button class="btn bg-info mr-5 p-1">
            <span>PREMIUM</span></button
          ><br />
          <span>299/month</span>
        </button>
        <div class="continue">
          <button class="btn btn-primary btn-lg mt-4 w-50">CONTINUE</button>
        </div>
      </center>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fields: [
        // A column that needs custom formatting
        { key: "name", label: "" },
        // A regular column
        "Free",
        // A regular column
        "VIP",
        "PREMIUM",
      ],
      items: [
        {
          name: { first: "Unlimited Live Sports" },
          Free: " ✗",
          VIP: " ✓",
          PREMIUM: " ✓",
        },
        {
          name: { first: "Hotstar Specials & Star Serials before on TV" },
          Free: "✗",
          VIP: "✓",
          PREMIUM: " ✓",
        },

        {
          name: { first: "Multiples & new Indian movies" },
          Free: "✗",
          VIP: "✓",
          PREMIUM: " ✓",
        },
        {
          name: { first: "Disney+movies Hollywood movies & Kids content" },
          Free: " ✗",
          VIP: "Only Dubbed",
          PREMIUM: " English+Dubbed",
        },

        {
          name: { first: "English shows & Disney+ Originals" },
          Free: " ✗",
          VIP: " ✗",
          PREMIUM: " ✓",
        },
        {
          name: { first: "Ad free entertainment" },
          Free: " ✗",
          VIP: "✗",
          PREMIUM: " ✓",
        },
        {
          name: { first: "Screens you can watch on" },
          Free: " 1",
          VIP: " 1",
          PREMIUM: " 2",
        },
        {
          name: { first: "Video quality" },
          Free: "SD",
          VIP: "HD",
          PREMIUM: "4K",
        },
        {
          name: { first: "Audio quality" },
          Free: "Stereo",
          VIP: "Dolby5.1",
          PREMIUM: "Dolby5.1",
        },
      ],
    };
  },
};
</script>
<styles>

.btn-lg, .btn-group-lg > .btn {
    padding: 0.5rem 2rem;
    width: 180px;
    font-size: 1.25rem;
    border-radius: 0.3rem;
}
span{
    font-size: 10px;
}
.but{
  font-size:10px;
}
.continue{
  margin:20px;
}
h5{
  margin:20px 0px;
}
@media (min-width:100px) and (max-width:441px)
{
items{
  font-size:10px;
}
}

</styles>

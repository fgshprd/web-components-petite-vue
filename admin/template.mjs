export const html = `
<h2>{{ label }}</h2>
<section id="admin">
    Some content for Admin.
    <input type="text" v-model="input">
    <button @click="updateUsername">Update username in Top</button>
</section>
`;
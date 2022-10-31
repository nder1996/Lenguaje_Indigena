<template>
	<div>
		<navbar />
	</div>
</template>
<script>

	export default{
		components:{
			 navbar: () => import("../components/admin/navbarAdmin.vue")
		}
	}
</script>
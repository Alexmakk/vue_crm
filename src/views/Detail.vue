<template>
  <div>
    <Loader v-if="loading" />
    <div v-else-if="record">
      <div class="breadcrumb-wrap">
        <router-link to="/history" class="breadcrumb">{{'Menu_History' | localize}}</router-link>
        <a @click.prevent class="breadcrumb">{{record.typeText}}</a>
      </div>
      <div class="row">
        <div class="col s12 m6">
          <div
            class="card"
            :class="[record.typeClass]"
            >
            <div class="card-content white-text">
              <p>{{'Description' | localize}}: {{record.description}}</p>
              <p>{{'Amount' | localize}}: {{record.amount | currency('RUB')}}</p>
              <p>{{'Category' | localize}}: {{record.categoryName}}</p>
              <small>{{record.date | date('datetime')}}</small>
            </div>
          </div>
        </div>
      </div>
    </div>
    <p class="center" v-else>{{'NoRecordId' | localize}}=<strong>{{$route.params.id}}</strong></p>
  </div>
</template>

<script>
import localizeFilter from '@/filters/localize.filter'

export default {
  name: 'detail',
  metaInfo() {
    return {
    title: this.$title('Detail_Title')
    }
  },
  data: () => ({
    record: null,
    loading: true
  }),
  async mounted() {
    const id = this.$route.params.id
    const record = await this.$store.dispatch('fetchRecordById', id)
    const category = await this.$store.dispatch('fetchCategoryById', record.categoryId)

    this.record = {
      ...record,
      categoryName: category.title,
      typeClass: record.type === 'income' ? 'green' : 'red',
      typeText: record.type === 'income' ? localizeFilter('Income') : localizeFilter('Outcome')
    }
    this.loading = false
  }
}
</script>

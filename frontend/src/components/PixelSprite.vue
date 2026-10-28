<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  rows: string[]
  palette: Record<string, string>
  label: string
}

const props = defineProps<Props>()

const cells = computed<{ x: number; y: number; fill: string }[]>(() =>
  props.rows.flatMap((row, y) =>
    [...row].flatMap((key, x) => (props.palette[key] ? [{ x, y, fill: props.palette[key] }] : [])),
  ),
)
</script>

<template>
  <svg
    class="pixel-sprite"
    :viewBox="`0 0 ${rows[0].length} ${rows.length}`"
    role="img"
    :aria-label="label"
    shape-rendering="crispEdges"
  >
    <rect v-for="cell in cells" :key="`${cell.x}-${cell.y}`" :x="cell.x" :y="cell.y" width="1" height="1" :fill="cell.fill" />
  </svg>
</template>

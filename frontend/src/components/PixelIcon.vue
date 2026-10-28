<script setup lang="ts">
import { computed } from 'vue'

export type PixelIconKey =
  | 'sword'
  | 'note'
  | 'phone'
  | 'window'
  | 'chart'
  | 'book'
  | 'heart'
  | 'shield'
  | 'mail'
  | 'prompt'

interface Props {
  icon: PixelIconKey
}

const props = defineProps<Props>()

const bitmaps: Record<PixelIconKey, string[]> = {
  sword: ['......xx', '.....xxx', '....xxx.', 'x..xxx..', 'xxxxx...', '.xxx....', 'xx.xx...', 'x....x..'],
  note: ['...xxxx.', '...xxxx.', '...x..x.', '...x..x.', '...x..x.', 'xxxx.xxx', 'xxxx.xxx', '........'],
  phone: ['..xxxx..', '.x....x.', '.x.xx.x.', '.x.xx.x.', '.x....x.', '.x....x.', '.x.xx.x.', '..xxxx..'],
  window: ['xxxxxxxx', 'x......x', 'xxxxxxxx', 'x.x..x.x', 'x......x', 'x.xxxx.x', 'x......x', 'xxxxxxxx'],
  chart: ['x.......', 'x.....x.', 'x..x..x.', 'x..x.xx.', 'x.xx.xx.', 'x.xx.xx.', 'x.xx.xx.', 'xxxxxxxx'],
  book: ['xxxxxxx.', 'x.xxxxxx', 'x.x...xx', 'x.xxxxxx', 'x.x...xx', 'x.xxxxxx', 'x.....xx', '.xxxxxx.'],
  heart: ['.xx..xx.', 'xxxxxxxx', 'xxxxxxxx', 'xxxxxxxx', '.xxxxxx.', '..xxxx..', '...xx...'],
  shield: ['xxxxxxxx', 'xxxxxxxx', 'xxxxxxxx', 'xxxxxxxx', '.xxxxxx.', '..xxxx..', '...xx...'],
  mail: ['xxxxxxxx', 'xx....xx', 'x.x..x.x', 'x..xx..x', 'x......x', 'x......x', 'x......x', 'xxxxxxxx'],
  prompt: ['xx......', '.xx.....', '..xx....', '...xx...', '..xx....', '.xx.....', 'xx.xxxxx', '........'],
}

const rows = computed<string[]>(() => bitmaps[props.icon])

const cells = computed<{ x: number; y: number }[]>(() =>
  rows.value.flatMap((row, y) => [...row].flatMap((cell, x) => (cell === 'x' ? [{ x, y }] : []))),
)
</script>

<template>
  <svg
    class="pixel-icon"
    :viewBox="`0 0 ${rows[0].length} ${rows.length}`"
    aria-hidden="true"
    shape-rendering="crispEdges"
  >
    <rect v-for="cell in cells" :key="`${cell.x}-${cell.y}`" :x="cell.x" :y="cell.y" width="1" height="1" fill="currentColor" />
  </svg>
</template>

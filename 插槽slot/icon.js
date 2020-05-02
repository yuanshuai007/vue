const icon_prefixCls = 'ivu-icon';

const icon={
		name: 'Icon',
		template:`
			<i :class="classes" :style="styles" @click="handleClick"></i>  
		`,
		props: {
				type: {
						type: String,
						default: ''
				},
				size: [Number, String],
				color: String,
				custom: {
						type: String,
						default: ''
				}
		},
		computed: {
				classes () {
						return [
								`${icon_prefixCls}`,
								{
										[`${icon_prefixCls}-${this.type}`]: this.type !== '',
										[`${this.custom}`]: this.custom !== '',
								}
						];
				},
				styles () {
						let style = {};

						if (this.size) {
								style['font-size'] = `${this.size}px`;
						}

						if (this.color) {
								style.color = this.color;
						}

						return style;
				}
		},
		methods: {
				handleClick (event) {
						this.$emit('click', event);
				}
		}
};

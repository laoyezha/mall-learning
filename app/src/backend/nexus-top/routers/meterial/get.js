

async function getMeterial(ctx, next) {

    let topClient = ctx.topClient;
    let topInfo = ctx.topInfo;
    try {
        let ret = await topClient.execute('taobao.tbk.dg.optimus.material', {
            'page_size': '2',
            'adzone_id': topInfo.adzone_id,
            'page_no': '1',
            'material_id': '3756',
            // 'device_value':'xxx',
            // 'device_encrypt':'MD5',
            // 'device_type':'IMEI',
            // 'content_id':'323',
            // 'content_source':'xxx',
            // 'item_id':'33243',
            // 'favorites_id':'123445'
        });
        ctx.response.body = ret;
        ctx.response.status = 200;
    } catch (error) {
        console.log(error);
        ctx.response.body = error;
        ctx.response.status = 500;
    }
}

function parseMeterial(meterialInfo) {
    let is_default = meterialInfo.is_default;
    let request_id = meterialInfo.request_id;
    if (meterialInfo.result_list.length > 0) {
        meterialInfo.result_list.mapmap((meterial, index) => {
            meterial.title; //商品标题
            meterial.item_description; //宝贝描述
            meterial.sub_title; // 吉品鲍鱼 关西参	商品子标题
            meterial.short_title; //商品短标题

            meterial.item_id; //宝贝id
            meterial.small_images; //商品小图列表
            meterial.pict_url; //商品主图
            meterial.click_url; //宝贝推广链接
            // meterial.coupon_click_url; //链接-宝贝+券二合一页面链接(该字段废弃，请勿再用)
            meterial.coupon_share_url; //链接-宝贝+券二合一页面链接
            meterial.reserve_price; // 商品信息-一口价
            meterial.zk_final_price; //折扣价（元） 若属于预售商品，付定金时间内，折扣价=预售价
            meterial.zk_final_price - meterial.coupon_amount; // 券后价
            meterial.new_user_price; // 1.99	商品信息-新人价

            meterial.coupon_amount; //优惠券面额
            meterial.coupon_total_count; //优惠券总量
            meterial.coupon_remain_count; //优惠券剩余量
            meterial.coupon_start_fee; //优惠券起用门槛
            meterial.coupon_start_time; //优惠券开始时间
            meterial.coupon_end_time; //优惠券结束时间
            meterial.coupon_info; // 满299减30元	优惠券信息-优惠券满减信息
            meterial.commission_rate; //佣金比率(%)

            meterial.volume; //30天销量

            meterial.nick; // 店铺信息-卖家昵称
            meterial.shop_title; //店铺名称
            meterial.category_id; //商品信息-叶子类目id
            meterial.user_type; //卖家类型，0表示淘宝，1表示天猫，3表示特价版
            meterial.seller_id; //卖家id

            meterial.level_one_category_name; //商品信息-一级类目名称
            meterial.level_one_category_id; //商品信息-一级类目ID
            meterial.category_name; //商品信息-叶子类目名称
            meterial.white_image; //商品信息-商品白底图
            meterial.word_list[0].url; //链接-商品相关关联词落地页地址
            meterial.word_list[0].word; //商品相关的关联词


            meterial.stock; //拼团剩余库存
            meterial.sell_num; //拼团已售数量
            meterial.total_stock; //拼团库存数量
            meterial.oetime; //拼团结束时间
            meterial.ostime; //拼团开始时间
            meterial.jdd_num; //拼团几人团
            meterial.jdd_price; //拼团拼成价，单位元
            meterial.orig_price; //拼团一人价（原价)，单位元
            
            meterial.tmall_play_activity_info; // 前n件x折	营销-天猫营销玩法
            meterial.uv_sum_pre_sale; // 21	商品信息-预售数量
            // meterial.x_id; // 物料块id(测试中请勿使用)

            meterial.ju_online_end_time; // 1559750399000	聚划算信息-聚淘结束时间
            meterial.ju_online_start_time; // 1559232000000	聚划算信息-聚淘开始时间
            meterial.ju_pre_show_end_time; // 1581868800000	聚划算信息-商品预热开始时间（毫秒）
            meterial.ju_pre_show_start_time; // 1582300799000	聚划算信息-商品预热结束时间（毫秒）

            meterial.maochao_play_end_time; // 1559750399000	猫超玩法信息-活动结束时间，精确到毫秒
            meterial.maochao_play_start_time; // 1559232000000	猫超玩法信息-活动开始时间，精确到毫秒
            meterial.maochao_play_conditions; // 2,3	猫超玩法信息-折扣条件，价格百分数存储，件数按数量存储。可以有多个折扣条件，与折扣字段对应，','分割
            meterial.maochao_play_discounts; // 500,450	猫超玩法信息-折扣，折扣按照百分数存储，其余按照单位分存储。可以有多个折扣，','分割
            meterial.maochao_play_discount_type; // 2	猫超玩法信息-玩法类型，2:折扣(满n件折扣),5:减钱(满n元减m元)
            meterial.maochao_play_free_post_fee; // 1	猫超玩法信息-当前是否包邮，1:是，0:否


            meterial.multi_coupon_zk_rate; // 0.41234	多件券优惠比例
            meterial.price_after_multi_coupon; // 9.9	多件券件单价
            meterial.multi_coupon_item_count; // 3	多件券单品件数
            meterial.lock_rate; // 110	锁住的佣金率
            meterial.lock_rate_end_time; // 1567440000000	锁佣结束时间
            meterial.lock_rate_start_time; // 1567440000000	锁佣开始时间
            meterial.promotion_type; // 1	满减满折的类型（1. 满减 2. 满折）
            meterial.promotion_info; // 满2件打5折；满300减20	满减满折信息
            meterial.promotion_discount; // 300	满减满折门槛（满2件打5折中值为2；满300减20中值为300）
            meterial.promotion_condition; // 5	满减满折优惠（满2件打5折中值为5；满300减20中值为20）


            meterial.presale_discount_fee_text; // 付定金立减5元	预售商品-优惠信息
            meterial.presale_tail_end_time; // 1567440000000	预售商品-付尾款结束时间（毫秒）
            meterial.presale_tail_start_time; // 1567440000000	预售商品-付尾款开始时间（毫秒）
            meterial.presale_end_time; // 1567440000000	预售商品-付定金结束时间（毫秒）
            meterial.presale_start_time; // 1567440000000	预售商品-付定金开始时间（毫秒）
            meterial.presale_deposit; // 100	预售商品-定金（元）
            meterial.ysyl_tlj_use_start_time; // 2019-11-10 21:59:59	预售有礼-淘礼金使用开始时间
            meterial.ysyl_commission_rate; // 2030（表示20.3%）	预售有礼-佣金比例（ 预售有礼活动享受的推广佣金比例，注：推广该活动有特殊分成规则，请详见：https:; //tbk.bbs.taobao.com/detail.html?appId=45301&postId=9334376 ）
            meterial.ysyl_tlj_send_time; // 2019-11-10 21:59:59	预售有礼-淘礼金发放时间
            meterial.ysyl_tlj_face; // 0.6	预售有礼-预估淘礼金（元）
            meterial.ysyl_click_url; // https:; //uland.taobao.com/coupon/edetail?e=nqUNB1NOF3Bt3vqbdXnGloankzPYmeEFkgNrw6YHQf9pZTj41Orn8MwBAs06HAOzqQomYNedOiHDYPmqkFXqLR0HgBdG%2FDDL%2F1M%2FBw7Sf%2FesGXLf%2BqX4cbeC%2F2cR0p0NlWH0%2BknxpnCJJP%2FQkZSsyo1HvKjXo4uz&pid=mm_26381042_12970066_52864659&af=1	预售有礼-推广链接
            meterial.ysyl_tlj_use_end_time; // 2019-11-10 21:59:59	预售有礼-淘礼金使用结束时间


            meterial.ju_play_end_time; // 1567440000000	聚划算满减 -结束时间（毫秒）
            meterial.ju_play_start_time; // 1567440000000	聚划算满减 -开始时间（毫秒）
            meterial.play_info; // 玩法	1聚划算满减：满N件减X元，满N件X折，满N件X元） 2天猫限时抢：前N分钟每件X元，前N分钟满N件每件X元，前N件每件X元）
            meterial.tmall_play_activity_end_time; // 1567440000000	天猫限时抢可售 -结束时间（毫秒）
            meterial.tmall_play_activity_start_time; // 1567440000000	天猫限时抢可售 -开始时间（毫秒）

            meterial.favorites_info.total_count; //选品库总数量
            meterial.favorites_info.favorites_list[0].favorites_id; //选品库id
            meterial.favorites_info.favorites_list[0].favorites_title; //选品库标题
            meterial.sale_price;; // 168	活动价
            meterial.kuadian_promotion_info; // ["每100减20","每200减50"]	跨店满减信息
            meterial.jhs_price_usp_list; // 满200减10	聚划算商品价格卖点描述
            meterial.tqg_online_end_time; // 1581868800000	淘抢购商品专用-结束时间
            meterial.tqg_online_start_time; // 1581868800000	淘抢购商品专用-开团时间
            meterial.tqg_sold_count; // 20	淘抢购商品专用-已抢购数量
            meterial.tqg_total_count; // 50	淘抢购商品专用-总库存
            meterial.superior_brand; // 1	是否品牌精选，0不是，1是
            meterial.is_brand_flash_sale; // 1	是否品牌快抢，0不是，1是
            meterial.hot_flag; // 1	是否是热门商品，0不是，1是
        })
    }

}

module.exports.getMeterial = getMeterial;

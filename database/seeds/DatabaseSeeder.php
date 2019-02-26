<?php

use Illuminate\Database\Seeder;
use App\Models\Category;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // GTMD的轮播
        for ($i = 0; $i < 5; $i++) {
            \App\Models\Banner::create([
                'name' => '首页轮播',
                'url' => 'http://pisow2jml.bkt.clouddn.com/uploads/1544686063/g9xpfPWwPj0UdHY5ulhxr7v4zit9flKa.jpg',
                'weight' => rand(1,100),
            ]);
        }

        //GTMD的分类
//        $class = [
//            "智能 手机",
//            "智能 家电"
//        ];
//        for ($i = 0; $i < 10; $i++){
//            Category::create(
//                [
//                    'name'     => array_random($class),
//                    'weight' => rand(1,100),
//                    'parent_id'     => '0',
//                ]
//            );
//        }

        $phone = Category::create(
            [
                'name'     => '小米手机',
                'weight' => rand(1,100),
                'parent_id' => '0',
            ]
        );

        $tv = Category::create(
            [
                'name'     => '小米电视',
                'weight' => rand(1,100),
                'parent_id' => '0',
            ]
        );

        $computer = Category::create(
            [
                'name'     => '小米电脑',
                'weight' => rand(1,100),
                'parent_id' => '0',
            ]
        );

        $homestyle = Category::create(
            [
                'name'     => '小米家电',
                'weight' => rand(1,100),
                'parent_id' => '0',
            ]
        );

        $new = Category::create(
            [
                'name'     => '小米新品',
                'weight' => rand(1,100),
                'parent_id' => '0',
            ]
        );

        $websit = Category::create(
            [
                'name'     => '小米路由器',
                'weight' => rand(1,100),
                'parent_id' => '0',
            ]
        );

        $intelligent = Category::create(
            [
                'name'     => '智能生活',
                'weight' => rand(1,100),
                'parent_id' => '0',
            ]
        );


        $kids = [
            [
                'name'     => '红米手机',
                'weight' => rand(1,100),
                'parent_id' => $phone->id,
            ],
            [
                'name'     => '小米家用电视',
                'weight' => rand(1,100),
                'parent_id' => $tv->id,
            ],
            [
                'name'     => '家电',
                'weight' => rand(1,100),
                'parent_id' => $homestyle->id,
            ],
            [
                'name'     => '小米新品',
                'weight' => rand(1,100),
                'parent_id' => $new->id,
            ],
            [
                'name'     => '小米路由器',
                'weight' => rand(1,100),
                'parent_id' => $websit->id,
            ],
            [
                'name'     => '智能',
                'weight' => rand(1,100),
                'parent_id' => $intelligent->id,
            ],
            [
                'name'     => '小米电脑',
                'weight' => rand(1,100),
                'parent_id' => $computer->id,
            ]
        ];

            foreach ($kids as $index => $kids) {
                Category::create($kids);
            }



        //GTMD产品
        for ($i = 0; $i < 100; $i++){
            \App\Models\Product::create([
                'cover' => 'http://pisow2jml.bkt.clouddn.com/uploads/1544688435/iSm1Ek7OSJm1itnnqDq1yq7TFxxs5xHp.jpg',
                'name' => '小米MIX 3',
                'pricing' => '1.00',
                'weight' => rand(1,100),
                'first_category_id' => rand(1,7),
                'second_category_id' => rand(8,15),
                'describe' => '磁动力滑盖全面屏 / 前后旗舰 AI 双摄 / 四曲面彩色陶瓷机身 / 高效 10W 无线充电',
                'content' => '<p><img src="http://pisow2jml.bkt.clouddn.com/uploads/1544688738/GaTY1foWETlaV0IBpHPpyP1EsdXYB3xI.jpeg" style="width: 100%;" class="fr-fic fr-dib" data-url="http://pisow2jml.bkt.clouddn.com/uploads/1544688738/GaTY1foWETlaV0IBpHPpyP1EsdXYB3xI.jpeg"></p>',
                'tb_link' => 'https://www.taobao.com/',
                'jd_link' => 'https://www.taobao.com/',
                'tm_link' => 'https://www.taobao.com/',
            ]);
        }

    }
}

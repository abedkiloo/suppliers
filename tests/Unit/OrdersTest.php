<?php

namespace Tests\Unit;

use App\Orders;
use Carbon\Carbon;
use Tests\TestCase;

class OrdersTest extends TestCase
{
    /**
     * @test
     */
    public function check_can_create_order()
    {
        $this->withExceptionHandling();

        $data = [
            'order_number' => "EW-3443-2019",
        ];
        $this->post('api/orders', $data)
            ->assertOk()
            ->assertStatus(200);
    }

    /**
     * @test
     */
    public function check_order_number_is_required()
    {
        $this->withExceptionHandling();

        $response = $this->post('api/orders', [
            'order_number' => '',
        ]);

        $response->assertSessionHasErrors('order_number');
    }


    public function an_order_can_update(){
        $this->withExceptionHandling();

        $data = [
            'order_number' => "EW-3443-2019",
        ];
        $this->patch('api/orders', $data)
            ->assertOk()
            ->assertStatus(200);
        $data = [
            'order_number' => "EW-443-2019",
        ];

        $this->patch('api/orders', $data)
            ->assertOk()
            ->assertEquals('EW-443-2019',Orders::first()->order_number);
    }
}

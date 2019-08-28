<?php

namespace Tests\Unit;

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

    /**
     * @test
     */
    public function check_can_create_order_details()
    {
        $this->withExceptionHandling();

        $data = [
            'name' => "abed",
            'description' => "describe",
            'quantity' => 100,
            'updated_at' => Carbon::now()
        ];


        $this->post('api/order-details', $data)
            ->assertOk()
            ->assertStatus(200);
    }
}

<?php

namespace Tests\Unit;

use Carbon\Carbon;
use Tests\TestCase;

class OrderDetails extends TestCase
{

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

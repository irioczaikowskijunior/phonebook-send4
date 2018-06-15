<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\Contacts;

/**
 * @SWG\Swagger(
 *     host="phonebook-send4.local",
 *     basePath="/api",
 *     @SWG\Info(
 *         version="1.0.0",
 *         title="This is my API - by - Irio czaikowski junior",
 *         description="This api is used to integrate front to the bakckend"
 *     )
 * )
 */
class ContactsController extends Controller
{
    /**
     * @SWG\Get(
     *     path="/contacts",
     *     summary="Find all contacts saved",
     *     @SWG\Response(
     *         response=200,
     *         description="successful operation"
     *     ),
     *     @SWG\Response(
     *         response="500",
     *         description="Application error",
     *     )
     * )
     */
    public function index()
    {
        try
        {
            return response()->json(Contacts::all(), 200);
        }
        catch (\Exception $ex)
        {
            return response()->json( array('msg' => $ex->getMessage(), 'code' => $ex->getCode() ) ,500);
        }
    }
    /**
     * @SWG\Get(
     *     path="/contacts/{id}",
     *     summary="Find an specific contact by id",
     *     @SWG\Parameter(
     *         name="id",
     *         in="path",
     *         description="Contact Identificator",
     *         required=true,
     *         type="integer"
     *     ),
     *     @SWG\Response(
     *         response=200,
     *         description="successful operation"
     *     )
     * )
     */
    public function show(Contacts $contact)
    {
        try
        {
            return response()->json($contact, 200);
        }
        catch (\Exception $ex)
        {
            return response()->json( array('msg' => $ex->getMessage(), 'code' => $ex->getCode() ) ,500);
        }
    }

    /**
     * @SWG\POST(
     *     path="/contacts",
     *     summary="Save the contact on the Database",
     *     @SWG\Parameter(
     *         name="name",
     *         in="query",
     *         description="Contact name",
     *         required=true,
     *         type="string"
     *     ),
     *     @SWG\Parameter(
     *         name="lastname",
     *         in="query",
     *         description="Contact last name",
     *         required=true,
     *         type="string"
     *     ),
     *     @SWG\Parameter(
     *         name="email",
     *         in="query",
     *         description="Contact email: like teste@test.com",
     *         required=true,
     *         type="string"
     *     ),
     *     @SWG\Parameter(
     *         name="phone_number",
     *         in="query",
     *         description="Contact phone number: like (41) 99999-9999",
     *         required=true,
     *         type="string"
     *     ),
     *     @SWG\Response(
     *         response=201,
     *         description="successful operation"
     *     )
     * )
     */
    public function store(Request $request)
    {
        try
        {
            $request->validate([
                'name' => 'required|max:100',
                'lastname' => 'required|max:100',
                'email' => 'required|max:50|email',
                'phone_number' => 'required|max:100'
            ]);

            $contact = Contacts::create($request->all());
            return response()->json( $contact, 201); // created => 201

        }
        catch (\Exception $ex)
        {
            return response()->json(array('msg' => $ex->getMessage(), 'code' => '500') ,500);
        }
    }
    /**
     * @SWG\PUT(
     *     path="/contacts/{id}",
     *     summary="Update the contact and save on the Database",
     *     @SWG\Parameter(
     *         name="id",
     *         in="path",
     *         description="Contact Identificator",
     *         required=true,
     *         type="integer"
     *     ),
     *     @SWG\Parameter(
     *         name="name",
     *         in="query",
     *         description="Contact name",
     *         required=true,
     *         type="string"
     *     ),
     *     @SWG\Parameter(
     *         name="lastname",
     *         in="query",
     *         description="Contact last name",
     *         required=true,
     *         type="string"
     *     ),
     *     @SWG\Parameter(
     *         name="email",
     *         in="query",
     *         description="Contact email: like teste@test.com",
     *         required=true,
     *         type="string"
     *     ),
     *     @SWG\Parameter(
     *         name="phone_number",
     *         in="query",
     *         description="Contact phone number: like (41) 99999-9999",
     *         required=true,
     *         type="string"
     *     ),
     *     @SWG\Response(
     *         response=200,
     *         description="successful operation"
     *     )
     * )
     */
    public function update(Request $request, Contacts $contact)
    {
        try
        {
            $request->validate([
                'name' => 'required|max:100',
                'lastname' => 'required|max:100',
                'email' => 'required|max:50|email',
                'phone_number' => 'required|max:100'
            ]);

            $contact->update($request->all());
            return response()->json($contact, 200);

        }
        catch (\Exception $ex)
        {
            return response()->json($ex ,500);
        }
    }
    /**
     * @SWG\DELETE(
     *     path="/contacts/{id}",
     *     summary="Remove contact from the Database",
     *     @SWG\Parameter(
     *         name="id",
     *         in="path",
     *         description="Contact Identificator",
     *         required=true,
     *         type="integer"
     *     ),
     *     @SWG\Response(
     *         response=200,
     *         description="successful operation"
     *     )
     * )
     */
    public function delete(Contacts $contact)
    {
        try
        {
            $contact->delete();
            return response()->json(array('msg' => 'Successfully removed !'), 200);
        }
        catch (\Exception $ex)
        {
            return response()->json(array('msg' => $ex->getMessage(), 'code' => '500') ,500);
        }
    }
}

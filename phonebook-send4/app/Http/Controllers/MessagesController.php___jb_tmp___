<?php

namespace App\Http\Controllers;

use App\Messages;
use App;
use Illuminate\Http\Request;

class MessagesController extends Controller
{
    /**
     * @SWG\Get(
     *     path="/messages/contact/{contact_id}",
     *     summary="Find all messages by contact",
     *     @SWG\Parameter(
     *         name="contact_id",
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
    public function showByContact($contact_id)
    {
        try
        {
            $messages = App\Contacts::find($contact_id)->messages;
            return response()->json($messages, 200);
        }
        catch (\Exception $ex)
        {
            return response()->json( array('msg' => $ex->getMessage(), 'code' => $ex->getCode() ) ,500);
        }
    }

    /**
     * @SWG\Get(
     *     path="/messages/{id}",
     *     summary="Find an specific messsage by id",
     *     @SWG\Parameter(
     *         name="id",
     *         in="path",
     *         description="Message Identificator",
     *         required=true,
     *         type="integer"
     *     ),
     *     @SWG\Response(
     *         response=200,
     *         description="successful operation"
     *     )
     * )
     */
    public function show(Messages $message)
    {
        try
        {
            return response()->json($message, 200);
        }
        catch (\Exception $ex)
        {
            return response()->json( array('msg' => $ex->getMessage(), 'code' => $ex->getCode() ) ,500);
        }
    }

    /**
     * @SWG\POST(
     *     path="/messages",
     *     summary="Save the message on the Database",
     *     @SWG\Parameter(
     *         name="message",
     *         in="query",
     *         description="Message description",
     *         required=true,
     *         type="string"
     *     ),
     *     @SWG\Parameter(
     *         name="contact_id",
     *         in="query",
     *         description="Contact identificator",
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
                'message' => 'required',
                'contact_id' => 'required|integer'
            ]);

            $message = Messages::create($request->all());
            // 201 => created
            return response()->json( $message, 201);
        }
        catch (\Exception $ex)
        {
            return response()->json(array('msg' => $ex->getMessage(), 'code' => '500') ,500);
        }
    }

    /**
     * @SWG\PUT(
     *     path="/messages/{id}",
     *     summary="Update message",
     *     @SWG\Parameter(
     *         name="id",
     *         in="path",
     *         description="Message Identificator",
     *         required=true,
     *         type="integer"
     *     ),
     *     @SWG\Parameter(
     *         name="message",
     *         in="query",
     *         description="Contact name",
     *         required=true,
     *         type="string"
     *     ),
     *     @SWG\Parameter(
     *         name="contact_id",
     *         in="query",
     *         description="Contact identificator",
     *         required=true,
     *         type="integer"
     *     ),
     *     @SWG\Response(
     *         response=200,
     *         description="successful operation"
     *     )
     * )
     */
    public function update(Request $request, Messages $message)
    {
        try
        {
            $request->validate([
                'message' => 'required',
                'contact_id' => 'required|integer'
            ]);

            $message->update($request->all());
            return response()->json($message, 200);
        }
        catch (\Exception $ex)
        {
            return response()->json(array('msg' => $ex->getMessage(), 'code' => '500') ,500);
        }
    }

    /**
     * @SWG\DELETE(
     *     path="/messages/{id}",
     *     summary="Remove message from the Database",
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
    public function delete(Messages $message)
    {
        try
        {
            $message->delete();
            return response()->json(array('msg' => 'Successfully removed !'), 200);
        }
        catch (\Exception $ex)
        {
            return response()->json(array('msg' => $ex->getMessage(), 'code' => '500') ,500);
        }
    }
}


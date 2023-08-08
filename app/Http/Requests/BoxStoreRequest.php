<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class BoxStoreRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array|string>
     */
    public function rules(): array
    {
        return [
            'cell' => ['required', 'numeric'],
            'invoice' => ['required', 'string'],
            'customer' => ['required', 'string'],
            'product' => ['required', 'string'],
        ];
    }
}

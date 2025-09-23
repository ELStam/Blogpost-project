<?php

namespace App\Http\Requests\Blog;

use Illuminate\Contracts\Validation\ValidationRule;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Gate;

class UpdateBlogRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        $blog = $this->route('blog');

        return $blog && Gate::allows('update', $blog);
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, ValidationRule|array|string>
     */
    public function rules(): array
    {
        return [
            'title' => 'required|string|max:255',
            'introduction' => 'required|string|max:255',
            'paragraph_title' => 'required|string|max:255',
            'paragraph_body' => 'required|string',
            'categories_id' => 'required|array|min:1',
            'categories_id.*' => 'required|exists:categories,id',
        ];
    }
}

/* import { registerDecorator, ValidationOptions, ValidationArguments } from 'class-validator';

export function IsEitherEmailOrUsername(property: string, validationOptions?: ValidationOptions) {
    return function (object: Object, propertyName: string) {
        registerDecorator({
            name: 'isEitherEmailOrUsername',
            target: object.constructor,
            propertyName: propertyName,
            options: validationOptions,
            validator: {
                validate(value: any, args: ValidationArguments) {
                    const [relatedPropertyName] = args.constraints;
                    const relatedValue = (args.object as any)[relatedPropertyName];
                    return (value !== undefined && value !== null && value !== '') ||
                        (relatedValue !== undefined && relatedValue !== null && relatedValue !== '');
                },
                defaultMessage(args: ValidationArguments) {
                    return `Either ${args.property} or ${args.constraints[0]} must be provided`;
                }
            }
        });
    };
}
 */
